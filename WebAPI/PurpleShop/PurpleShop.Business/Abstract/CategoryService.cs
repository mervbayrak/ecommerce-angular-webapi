using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Abstract
{
    public interface CategoryService
    {
        Category Get(int id);
        List<Category> GetList();
    }
}
