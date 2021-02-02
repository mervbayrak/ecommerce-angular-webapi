using PurpleShop.Business.Abstract;
using PurpleShop.DataAccess.Abstract;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Concrete
{
    public class CategoryManager : CategoryService
    {
        ICategoryDal _categoryDal;
        public CategoryManager(ICategoryDal categoryDal)
        {
            _categoryDal = categoryDal;
        }
        public Category Get(int id)
        {
            return _categoryDal.Get(m => m.Id == id);
        }
        public List<Category> GetList()
        {
            return _categoryDal.GetList();
        }
    }
}
