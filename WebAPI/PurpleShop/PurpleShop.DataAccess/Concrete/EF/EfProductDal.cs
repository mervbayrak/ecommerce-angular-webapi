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
    public class EfProductDal : EfRepository<PurpleDBContext, Product>, IProductDal
    {
        public override List<Product> GetList(Expression<Func<Product, bool>> filter = null)
        {
            return filter == null
                ? base._context.Set<Product>()
                .Include(x => x.ProductImages)
                .Include(x => x.Category)
                .Include(x => x.Category.UpperCategories).ToList()

                : base._context.Set<Product>().Where(filter)
                .Include(x => x.ProductImages)
                .Include(x => x.Category)
                .Include(x => x.Category.UpperCategories).ToList();
        }
    }
    public class EfProductPhotoDal : EfRepository<PurpleDBContext, ProductImage>, IProductPhotoDal
    {
    }
}
