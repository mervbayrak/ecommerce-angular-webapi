using Microsoft.EntityFrameworkCore;
using PurpleShop.Core.DataAccess.EF;
using PurpleShop.DataAccess.Abstract;
using PurpleShop.DataAccess.Concrete.EF.Context;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace PurpleShop.DataAccess.Concrete.EF
{
    public class EfCategoryDal : EfRepository<PurpleDBContext, Category>, ICategoryDal
    {
        public override List<Category> GetList(Expression<Func<Category, bool>> filter = null)
        {
            using (var context = new PurpleDBContext())
            {
                return filter == null
                ? context.Set<Category>().Include(x => x.UpperCategories).ToList()
                : context.Set<Category>().Where(filter).Include(x => x.UpperCategories).ToList();
            }
        }
    }
    //public class EfSubCategoryDal : EfRepository<PurpleDBContext, SubCategory>, ISubCategoryDal
    //{
    //}
}
