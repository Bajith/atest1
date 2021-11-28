
using AutoMapper;
using Api.Dtos;

namespace Api.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Api.Core.Entities.Identity.Address, AddressDto>().ReverseMap();
        }
    }
}