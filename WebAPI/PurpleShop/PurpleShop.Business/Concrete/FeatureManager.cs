using PurpleShop.Business.Abstract;
using PurpleShop.DataAccess.Abstract;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Concrete
{
    public class FeatureManager : FeatureService
    {
        IFeatureDal _featureDal;
        public FeatureManager(IFeatureDal featureDal)
        {
            _featureDal = featureDal;
        }
        public Feature Get(int id)
        {
            return _featureDal.Get(m => m.Id == id);
        }
        public List<Feature> GetList()
        {
            return _featureDal.GetList();
        }
    }
}
