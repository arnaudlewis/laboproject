package common.dataAccess;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public abstract class Dao<T> {

//    static Map<String, Object> configOverrides = new HashMap<String, Object>() {{
//        put("hibernate.hbm2ddl.auto", "create");
//    }};


    private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");

    public EntityManagerFactory getEntityManagerFactory() {
        return emf;
    }

    public abstract int insert(T obj);

    public abstract void update(T obj);

    public abstract void delete(T obj);

    public abstract T find(int id);

    public abstract List<T> findAll();
}
