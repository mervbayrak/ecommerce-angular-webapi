using Microsoft.EntityFrameworkCore;
using PurpleShop.Core.Entities;
using PurpleShop.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace PurpleShop.Core.DataAccess.EF
{
    public class EfRepository<TContext, TEntity> : IRepository<TEntity>
        where TContext : DbContext, new()
        where TEntity : class, IEntity, new()
    {
        protected DbContext _context;
        public EfRepository()
        {
            var context = new TContext();
            _context = context;
        }
        public void Add(TEntity entity)
        {
            _context.Add(entity);
        }

        public void Delete(TEntity entity)
        {
            _context.Remove(entity);
        }
        public void Update(TEntity entity)
        {
            _context.Update(entity);
        }
        public virtual TEntity Get(Expression<Func<TEntity, bool>> filter)
        {
            return _context.Set<TEntity>().FirstOrDefault(filter);
        }

        public virtual List<TEntity> GetList(Expression<Func<TEntity, bool>> filter = null)
        {
            return filter == null
                ? _context.Set<TEntity>().ToList()
                : _context.Set<TEntity>().Where(filter).ToList();
        }

        public bool SaveDb(TEntity entity, CreateReason reason= CreateReason.Create)
        {
            switch (reason)
            {
                case CreateReason.Create:
                    Add(entity);
                    break;
                case CreateReason.Update:
                    Update(entity);
                    break;
                case CreateReason.Delete:
                    Delete(entity);
                    break;
            }
            return SaveAll();
        }
        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
