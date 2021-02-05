using PurpleShop.Entities.Concrete;
using PurpleShop.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Abstract
{
    public interface CategoryService
    {
        Category Get(int id);
        List<DtoCategory> GetList(bool? isMain = null);
    }
}
