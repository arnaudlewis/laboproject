package travel.service;

import travel.Travel;
import travel.dataAccess.DaoTravel;
import travel.dto.ProposeTravelRequestDTO;
import travel.dto.SearchTravelRequestDTO;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;


@Path("/travel")
public class TravelService {

    @POST
    @Path("/search")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Travel> search(SearchTravelRequestDTO request) {
        return DaoTravel.getInstance().searchByCriteria(request.getDeparture(), request.getArrival(), request.getTravelDate());
    }

    @POST
    @Path("/propose")
    @Produces(MediaType.APPLICATION_JSON)
    public int propose(ProposeTravelRequestDTO request) {
        Travel newTravel = request.getTravel();
        newTravel.setPreferences(request.getPreference());
        newTravel.setDriver(request.getUser());

        return DaoTravel.getInstance().insert(newTravel);
    }
}
