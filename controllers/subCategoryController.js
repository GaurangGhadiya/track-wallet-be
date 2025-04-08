import { apiResponse } from "../common/index.js";
import SubCategory from "../models/subCategory.js";

export const addSubCategory = async (req, res) => {
    try {
      const { name, color, icon,categoryId } = req.body;
  
      const category = await SubCategory.findOne({ where: { name } });
      if (category) return res.status(409).json(await apiResponse(409, "Subcategory already exists", {}, {}));
  
      const newCategory = await SubCategory.create({ name, color, icon,categoryId });
    return  res.status(201).json(await apiResponse(201, "Subcategory created successfully", newCategory, {}));
      
    } catch (error) {
      console.error("Error:", error);
    return  res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  
  export const getSubCategory = async (req, res) => {
    try {
        const { categoryId } = req.query; 
        if(categoryId){
          const categories = await SubCategory.findAll({ where: { categoryId } });
          return res.status(200).json(await apiResponse(200, "Subcategories fetched successfully", categories, {}));
        }

      const categories = await SubCategory.findAll();
      return res.status(200).json(await apiResponse(200, "Subcategory fetched successfully", categories, {} ,{}));
    } catch (error) {
      console.error("Error fetching categories:", error);
    return  res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };

  
  export const getSubCategoryById = async (req, res) => {
    try {
      const { id } = req.params; // or use req.params if you're using /getCategory/:id
  
      if (!id) {
        return res.status(400).json(await apiResponse(400, "Subcategory ID is required", {}, {}));
      }
  
      const category = await SubCategory.findByPk(id);
  
      if (!category) {
        return res.status(404).json(await apiResponse(404, "Subcategory not found", {}, {}));
      }
  
     return res.status(200).json(await apiResponse(200, "Subcategory fetched successfully", category, {}));
    } catch (error) {
      console.error("Error fetching category by ID:", error);
     return res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  
  export const deleteSubCategory = async (req, res) => {
    try {
      const { id } = req.params;

      const category = await SubCategory.findByPk(id);
      if (!category) return res.status(404).json(await apiResponse(404, "Subcategory not found", {}, {}));
  
      await category.destroy();
    return  res.status(200).json(await apiResponse(200, "Subcategory deleted successfully", {}, {}));
      
    } catch (error) {
      console.error("Error deleting category:", error);
    return  res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  


  export const updateSubCategory = async (req, res) => {
    try {
      const { name, color, icon, id } = req.body;
  
  
      const category = await SubCategory.findByPk(id);
      if (!category) return res.status(404).json(await apiResponse(404, "Subcategory not found", {}, {}));
  
      await category.update({ name, color, icon });
     return res.status(200).json(await apiResponse(200, "Subcategory updated successfully", category, {}));
      
    } catch (error) {
      console.error("Error updating category:", error);
    return  res.status(500).json(await apiResponse(500, "Internal server error", {}, error));
    }
  };
  