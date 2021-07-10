export default function logINFO(message: any, clazz?: string) {
  let now = new Date();
  console.log(
    `[${now.getHours().toString()}:${now.getMinutes().toString()}:${now
      .getSeconds()
      .toString()}] - [${
      clazz == undefined ? "General" : clazz
    }/INFO] >> ${message}`
  );
}
