using AutoMapper;
using PurpleShop.Business.Abstract;
using PurpleShop.Core.Utilities;
using PurpleShop.DataAccess.Abstract;
using PurpleShop.Entities.Concrete;
using PurpleShop.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Concrete
{
    public class ProductManager : ProductService
    {
        IProductDal _productDal;
        IMapper _mapper;
        public ProductManager(IProductDal productDal, IMapper mapper)
        {
            _productDal = productDal;
            _mapper = mapper;
        }
        public Product Get(int id)
        {
            return _productDal.Get(m => m.Id == id);
        }
        public List<DtoProduct> GetList()
        {
            return _mapper.Map<List<DtoProduct>>(_productDal.GetList());
        }
    }
}
