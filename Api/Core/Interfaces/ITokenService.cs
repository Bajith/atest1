using Api.Core.Entities.Identity;

namespace Api.Core.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}