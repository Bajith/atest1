using System.Threading.Tasks;
using Api.Core.Entities;

namespace Api.Core.Interfaces
{
    public interface IUnitOfWork
    {
        IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
        Task<int> Complete();
    }
}