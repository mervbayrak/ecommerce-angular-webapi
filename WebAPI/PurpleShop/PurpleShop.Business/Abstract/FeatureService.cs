using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Abstract
{
    public interface FeatureService
    {
        Feature Get(int id);
        List<Feature> GetList();
    }
}
