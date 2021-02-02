using PurpleShop.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Entities.Concrete
{
    public class Feature : IEntity
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int Price { get; set; }
        public int UnitsInStock { get; set; }
        public string PaymentOptions { get; set; }

    }

    //Burada bir ayrım yapılmalı measurement vs

    //Elektronik Ürünler
    public class FeatureElectronic : Feature, IEntity
    {
        public int FeatureId { get; set; }
        public string InternalMemory { get; set; }
        public string ScreenSize { get; set; }
        public string RAMCapacity { get; set; }
        public string BatteryPower { get; set; }
        public string CameraResolution { get; set; }
    }
}
