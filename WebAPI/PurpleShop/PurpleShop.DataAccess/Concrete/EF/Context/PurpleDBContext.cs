using Microsoft.EntityFrameworkCore;
using PurpleShop.DataAccess.Concrete.EF.Mappings;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.DataAccess.Concrete.EF.Context
{
   public  class PurpleDBContext : DbContext
    {
        DbSet<Category> Categories { get; set; }
        DbSet<Feature> Features { get; set; }   
        DbSet<FeatureElectronic> FeatureElectronics { get; set; }
        //DbSet<ProductFeature> ProductFeatures { get; set; }
        DbSet<ProductImage> ProductImages { get; set; }
        DbSet<Product> Products { get; set; }
        //DbSet<SubCategory> SubCategories { get; set; }
        public PurpleDBContext() { }
        public PurpleDBContext(DbContextOptions<PurpleDBContext> options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-UB2I2JK\\SQLEXPRESS;Initial Catalog=PurpleCommerceDB;Integrated Security=True");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new CategoryMap());
            modelBuilder.ApplyConfiguration(new FeatureMap());
            //modelBuilder.ApplyConfiguration(new SubCategoryMap());
            modelBuilder.ApplyConfiguration(new ProductMap());
            modelBuilder.ApplyConfiguration(new ProductImageMap());
        }
    }
}
