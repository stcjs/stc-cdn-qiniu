import path from 'path';
import qn from 'qn';
import {md5, promisify, isFunction, isString, extend} from 'stc-helper';

/**
 * 将文件内容上传到 CDN 并返回 url
 * @param  {Object} client  qn 实例
 * @param  {String} content 文件内容
 * @param  {String} key     文件 key
 * @return {String}         cdn url
 */
const getCdnUrl = async function getCdnUrl(client, content, key) {
  const {url} = await promisify(client.upload, client)(new Buffer(content, 'binary'), {key});
  return url;
};

/**
 * 根据参数生成 key
 * @param  {String|Function} keyParam key 生成规则
 * @param  {String}          content  文件内容
 * @param  {[type]}          filepath 文件路径
 * @return {[type]}                   文件 key
 */
const generateKey = function generateKey(keyParam, content, filepath) {
  const params = {filepath};
  extend(params, path.parse(filepath));
  params.hash = md5(content);
  params.dir = params.dir ? `${params.dir}/` : '';

  if (isFunction(keyParam)) {
    return keyParam(params);
  }

  if (!isString(keyParam)) {
    keyParam = '[dir][hash][ext]';
  }

  return keyParam.replace(/\[(\w+)\]/ig, (a, b) => params[b] || '');
};

/**
 * cdn Adapter
 * @param  {String} content       文件内容
 * @param  {String} filepath      文件路径
 * @param  {Object} options       选项
 * @param  {Object} cacheInstance 缓存实例
 * @return {String}               cdn url
 */
export default async function stcAdapter(content, filepath, options, cacheInstance) {

  let value = await cacheInstance.get();
  if (value !== undefined) {
    return value;
  }

  const client = qn.create(options.qiniu);
  const key = await generateKey(options.key, content, filepath);
  value = await getCdnUrl(client, content, key);
  await cacheInstance.set(value);
  return value;
};
