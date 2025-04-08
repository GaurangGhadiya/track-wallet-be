import { apiResponse } from "../common/index.js";
import Category from "../models/category.js";

export const addCategory = async (req, res) => {
    try {
      const { name, color, icon, type } = req.body;
  
      const category = await Category.findOne({ where: { name } });
      if (category) return res.status(409).json(await apiResponse(409, "Category already exists"));
  
      const newCategory = await Category.create({ name, color, icon, type });
      res.status(201).json(await apiResponse(201, "Category created successfully", newCategory));
      
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  
  export const getCategory = async (req, res) => {
    try {
      const { type } = req.query; 
      if(type){
        const categories = await Category.findAll({ where: { type } });
        return res.status(200).json(await apiResponse(200, "Categories fetched successfully", categories, {}));
      }
      const categories = await Category.findAll();
      return res.status(200).json(await apiResponse(200, "Categories fetched successfully", categories, {}));
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };

  
  export const getCategoryById = async (req, res) => {
    try {
      const { id } = req.params; // or use req.params if you're using /getCategory/:id
  
      if (!id) {
        return res.status(400).json(await apiResponse(400, "Category ID is required", {}, {}));
      }
  
      const category = await Category.findByPk(id);
  
      if (!category) {
        return res.status(404).json(await apiResponse(404, "Category not found", {}, {}));
      }
  
      res.status(200).json(await apiResponse(200, "Category fetched successfully", category, {}));
    } catch (error) {
      console.error("Error fetching category by ID:", error);
      res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  
  export const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);
      if (!category) return res.status(404).json(await apiResponse(404, "Category not found", {}, {}));
  
      await category.destroy();
      res.status(200).json(await apiResponse(200, "Category deleted successfully", {}, {}));
      
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  


  export const updateCategory = async (req, res) => {
    try {
      const { name, color, icon, id } = req.body;
  
  
      const category = await Category.findByPk(id);
      if (!category) return res.status(404).json(await apiResponse(404, "Category not found", {}, {}));
  
      await category.update({ name, color, icon });
      res.status(200).json(await apiResponse(200, "Category updated successfully", category, {}));
      
    } catch (error) {
      console.error("Error updating category:", error);
      res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  