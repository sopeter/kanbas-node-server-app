import * as dao from "./dao.js";

function ModuleRoutes(app) {

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const module = req.body;

    const status = await dao.updateModule(mid, module);
    res.json(status);
  };

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  }

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };

    const status = await dao.createModule(newModule);
    res.json(status);
  }

  const findModulesByCourseId = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourseId(cid);
    res.json(modules);
  };

  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", findModulesByCourseId);


}
export default ModuleRoutes;
