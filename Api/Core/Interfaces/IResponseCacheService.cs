using System;
using System.Threading.Tasks;

namespace Api.Core.Interfaces
{
    public interface IResponseCacheService
    {
        Task CacheResponseAsync(string cacheKey, object response, TimeSpan timeToLive);
        Task<string> GetCachedResponse(string cacheKey);
    }
}