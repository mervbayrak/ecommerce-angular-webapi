using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PurpleShop.Business.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PurpleShop.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        CategoryService _categoryService;

        public CategoriesController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        public ActionResult GetCategories(bool? isMain)
        {
            var categories = _categoryService.GetList(isMain: isMain);
            return Ok(categories);
        }
    }
}
