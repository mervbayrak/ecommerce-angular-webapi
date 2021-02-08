using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.DataAccess.Concrete.EF.Mappings
{
    public class FeatureMap : IEntityTypeConfiguration<Feature>
    {
        public void Configure(EntityTypeBuilder<Feature> builder)
        {
            builder.ToTable(@"Features");
            builder.HasKey(x => x.Id);
        }
    }
    public class FeatureElectronicMap : IEntityTypeConfiguration<FeatureElectronic>
    {
        public void Configure(EntityTypeBuilder<FeatureElectronic> builder)
        {
            builder.ToTable(@"FeatureElectronics");
            builder.HasKey(x => x.Id);
        }
    }
}
