package common.rest;


import city.service.CityService;
import user.service.UserService;

import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

public class Rest extends Application {
    private Set<Object> singletons = new HashSet<Object>();

    public Rest() {

        singletons.add(new UserService());
        singletons.add(new CityService());

    }

    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }
}
