using AutoMapper;
using PurpleShop.Entities.Concrete;
using PurpleShop.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PurpleShop.Business.Mappings.AutoMapper
{
    public class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<Category, DtoCategory>()
            .ForMember(dest => dest.SubCategories, e => e.MapFrom(s => s.UpperCategories.Select(x=> new DtoSubCategory
            {
                Id = x.Id,
                Name = x.Name,
            }).ToList()))
            .ForMember(dest => dest.Id, f => f.MapFrom(src => src.Id))
            .ForMember(dest => dest.Photo, f => f.MapFrom(src => src.Photo))
            .ForMember(dest => dest.Name, f => f.MapFrom(src => src.Name))
            .ForMember(dest => dest.IsMain, f => f.MapFrom(src => src.IsMain))
            .ForMember(dest => dest.UpperCategoryId, f => f.MapFrom(src => src.UpperCategoryId));
        }
    }
}
