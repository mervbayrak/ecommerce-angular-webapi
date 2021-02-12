using PurpleShop.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Entities.Concrete
{
    public class Feature : IEntity
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string ColorName { get; set; }
        public int UnitsInStock { get; set; }
        public string PaymentOptions { get; set; }

    }

}
