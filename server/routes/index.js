import record from './record.js';
// import fs from 'fs'

const customRoutes = () => {
  const routes = [];
  // fs.readdir('./routes/', async (error, files) => {
  //   if (error) {
  //     return console.log('Failed to read the routes directory')
  //   }
  //   const filtered = files.filter(
  //     (obj) => obj !== 'index.js' && obj.endsWith('.js')
  //   )
  //   for (const index in filtered) {
  //     const toLoad = await import(`./routes/${filtered[index]}`)
  //     routes.push(toLoad)
  //   }
  // })

  routes.push(record);
  return routes;
};
export default { customRoutes };
