using PurpleShop.Core.DataAccess.EF;
using PurpleShop.DataAccess.Abstract;
using PurpleShop.DataAccess.Concrete.EF.Context;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.DataAccess.Concrete.EF
{
    public class EfFeatureDal : EfRepository<PurpleDBContext, Feature>, IFeatureDal
    {
    }
}
