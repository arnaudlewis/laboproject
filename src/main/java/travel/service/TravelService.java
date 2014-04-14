package travel.service;

import city.City;
import travel.Travel;
import travel.dataAccess.DaoTravel;
import travel.dto.ProposeTravelRequestDTO;
import travel.dto.ProposeTravelResponseDTO;
import travel.dto.SearchTravelRequestDTO;
import travel.dto.SearchTravelResponseDTO;
import user.dataAccess.DaoUser;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Date;
import java.util.List;

/**
 * Created by oliver on 04/04/14.
 */
@Path("/travel")
public class TravelService {

    @POST
    @Path("/search")
    public SearchTravelResponseDTO search(SearchTravelRequestDTO requete) {
        SearchTravelResponseDTO reponse = new SearchTravelResponseDTO();

        City dep = requete.getDeparture();
        City arr = requete.getArrival();
        Date date = requete.getTravelDate();

//        reponse.setSearchResultsList(DaoTravel.getInstance().findAll());
        reponse.setSearchResultsList(DaoTravel.getInstance().searchByCriteria(dep, arr, date));

        return reponse;
    }

    @POST
    @Path("/propose")
    public ProposeTravelResponseDTO propose(ProposeTravelRequestDTO requete) {
        ProposeTravelResponseDTO reponse = new ProposeTravelResponseDTO();
        Travel voyage = new Travel();

        voyage.setDriver(DaoUser.getInstance().find(requete.getId_user()));
        voyage.setDeparture(requete.getDeparture());
        voyage.setArrival(requete.getArrival());
        voyage.setTravelDate(requete.getTravelDate());

        reponse.setId_travel(DaoTravel.getInstance().insert(voyage));
        return reponse;
    }

    @GET
    @Path("/search")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Travel> test() {
        return DaoTravel.getInstance().findAll();
    }
}
