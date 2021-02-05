using AutoMapper;
using PurpleShop.Business.Abstract;
using PurpleShop.DataAccess.Abstract;
using PurpleShop.Entities.Concrete;
using PurpleShop.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Concrete
{
    public class CategoryManager : CategoryService
    {
        ICategoryDal _categoryDal;
        private IMapper _mapper;
        public CategoryManager(ICategoryDal categoryDal, IMapper mapper)
        {
            _categoryDal = categoryDal;
            _mapper = mapper;
        }
        public Category Get(int id)
        {
            return _categoryDal.Get(m => m.Id == id);
        }
        public List<DtoCategory> GetList(bool? isMain = null)
        {
            return isMain == null
              ? _mapper.Map<List<DtoCategory>>(_categoryDal.GetList())
              : _mapper.Map<List<DtoCategory>>(_categoryDal.GetList(m => m.IsMain == isMain));
        }
    }
}
