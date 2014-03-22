package journey.service;

import journey.Journey;
import journey.dataAccess.DaoJourney;
import journey.dto.EssaiResponseInsertDTO;
import journey.dto.SearchJourneyRequestDTO;
import journey.dto.SearchJourneyResponseDTO;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 * Created by oliver on 09/03/14.
 */
@Path("/journey")
public class JourneyService {

    @POST
    @Path("/search")
    public SearchJourneyResponseDTO search(SearchJourneyRequestDTO requete) {
        SearchJourneyResponseDTO reponse = new SearchJourneyResponseDTO();

        // execution de la requête SQL de selection à l'aide de notre singleton DaoJourney
        reponse.setList_journey(DaoJourney.getInstance().findAll(requete.getDeparture(), requete.getArrival()));

        return reponse;
    }

    // Ce Web Service sert UNIQUEMENT à tester la bonne persistence dans la bdd
    @POST
    @Path("/insert")
    public EssaiResponseInsertDTO insert(SearchJourneyRequestDTO requete) {

        EssaiResponseInsertDTO reponse1 = new EssaiResponseInsertDTO();
        Journey journey = new Journey();
        journey.setArrival(requete.getArrival());
        journey.setDeparture(requete.getDeparture());
        journey.setJourney_date(requete.getJourney_date());

        // execution de la requête SQL d'insertion à l'aide de notre singleton DaoJourney
        reponse1.setId_journey(DaoJourney.getInstance().insert(journey));

        return reponse1;
    }
}
