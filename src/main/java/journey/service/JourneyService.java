package journey.service;

import journey.dataAccess.DaoJourney;
import journey.dto.SearchJourneyRequestDTO;
import journey.dto.SearchJourneyResponseDTO;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("/journey")
public class JourneyService {

    @POST
    @Path("/search")
    public SearchJourneyResponseDTO search(SearchJourneyRequestDTO requete) {
        SearchJourneyResponseDTO reponse = new SearchJourneyResponseDTO();

        reponse.setList_journey(DaoJourney.getInstance().findAll(requete.getDeparture(), requete.getArrival()));

        return reponse;
    }

}
