using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PurpleShop.Business.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace PurpleShop.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        ProductService _productService;
        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }
        public ActionResult GetProducts()
        {
            var products = _productService.GetList();
            return Ok(products);
        }
    }
}
