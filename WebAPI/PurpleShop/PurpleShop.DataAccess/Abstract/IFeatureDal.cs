using PurpleShop.Core.DataAccess;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.DataAccess.Abstract
{
    public interface IFeatureDal : IRepository<Feature>
    {
    }
    public interface IFeatureElectronicDal : IRepository<FeatureElectronic>
    {
    }
}
