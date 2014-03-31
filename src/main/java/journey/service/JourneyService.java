package journey.service;

import journey.Journey;
import journey.dataAccess.DaoJourney;
import journey.dto.*;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 * Created by oliver on 09/03/14.
 */
@Path("/journey")
public class JourneyService {

    // Ce Web Service sert à rechercher un voyage
    @POST
    @Path("/search")
    public SearchJourneyResponseDTO search(SearchJourneyRequestDTO requete) {
        SearchJourneyResponseDTO reponse = new SearchJourneyResponseDTO();

        // execution de la requête SQL de selection à l'aide de notre singleton DaoJourney
        reponse.setList_journey(DaoJourney.getInstance().findAll());

        return reponse;
    }

    // Ce Web Service sert à proposer un voyage
    @POST
    @Path("/proposal")
    public ProposalJourneyResponseDTO insert(ProposalJourneyRequestDTO requete) {

        ProposalJourneyResponseDTO reponse = new ProposalJourneyResponseDTO();
        Journey journey = new Journey();
        journey.setArrival(requete.getArrival());
        journey.setDeparture(requete.getDeparture());
        journey.setJourney_date(requete.getJourney_date());
        journey.setPrice(requete.getPrice());

        // execution de la requête SQL d'insertion à l'aide de notre singleton DaoJourney
        reponse.setId_journey(DaoJourney.getInstance().insert(journey));

        return reponse;
    }
}
