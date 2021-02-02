using PurpleShop.Core.Entities;
using PurpleShop.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace PurpleShop.Core.DataAccess
{
    public interface IRepository<T> where T : class, IEntity, new()
    {
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);

        abstract T Get(Expression<Func<T, bool>> filter);
        abstract List<T> GetList(Expression<Func<T, bool>> filter = null);
        bool SaveDb(T entity, CreateReason reason = CreateReason.Create);
        bool SaveAll();
    }
}
