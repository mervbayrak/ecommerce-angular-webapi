using AutoMapper;
using PurpleShop.Entities.Concrete;
using PurpleShop.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Mappings.AutoMapper
{
    public class FeatureProfile : Profile
    {
        public FeatureProfile()
        {
            CreateMap<Feature, DtoFeature>();
        }
    }
}
