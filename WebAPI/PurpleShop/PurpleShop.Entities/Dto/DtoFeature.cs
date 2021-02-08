using PurpleShop.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Entities.Dto
{
    public class DtoFeature : IDto
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public int UnitsInStock { get; set; }
        public string PaymentOptions { get; set; }
        public List<DtoFeatureElectronic> FeatureElectronics { get; set; }
    }
    public class DtoFeatureElectronic : IDto
    {
        public int Id { get; set; }
        public int FeatureId { get; set; }
        public string InternalMemory { get; set; }
        public string ScreenSize { get; set; }
        public string RAMCapacity { get; set; }
        public string BatteryPower { get; set; }
        public string CameraResolution { get; set; }
    }
}
