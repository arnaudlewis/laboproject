package city.service;


import city.City;
import city.dataAccess.DaoCity;
import city.dto.AutocompleteDTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/city")
public class CityService {

    @Path("/load")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public List<City> loadCities(AutocompleteDTO request) {
        return DaoCity.getInstance().loadCities(request.getSearchParam());
    }
}
