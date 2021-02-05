using PurpleShop.Core.DataAccess;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.DataAccess.Abstract
{
    public interface ICategoryDal : IRepository<Category>
    {
    }
    //public interface ISubCategoryDal : IRepository<SubCategory>
    //{
    //}
}
