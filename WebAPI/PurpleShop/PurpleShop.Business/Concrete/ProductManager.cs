using PurpleShop.Business.Abstract;
using PurpleShop.Core.Utilities;
using PurpleShop.DataAccess.Abstract;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Concrete
{
    public class ProductManager : ProductService
    {
        IProductDal _productDal;
        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }
        public Product Get(int id)
        {
            return _productDal.Get(m => m.Id == id);
        }
        public List<Product> GetList()
        {
            var asd = _productDal.GetList();
            return asd;

            //return AutoMapperHelper.MapToSameTypeList<Product>(_productDal.GetList());

            //return _mapper.Map<List<Product>>(_productDal.GetList());
        }
    }
}
