using AutoMapper;
using PurpleShop.Entities.Concrete;
using PurpleShop.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PurpleShop.Business.Mappings.AutoMapper
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, DtoProduct>()
                .ForMember(dest => dest.Id, f => f.MapFrom(src => src.Id))
                .ForMember(dest => dest.Name, f => f.MapFrom(src => src.Name))
                .ForMember(dest => dest.Description, f => f.MapFrom(src => src.Description))
                .ForMember(dest => dest.ProductImages, f => f.MapFrom(src => src.ProductImages))
                .ForMember(dest => dest.Feature, f => f.MapFrom(src => src.Feature))
                .ForMember(dest => dest.Category, f => f.MapFrom(src => src.Category));
        }
    }
}
