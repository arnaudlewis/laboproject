package common.dataAccess;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.List;

public abstract class Dao<T> {

//   static Map<String, Object> configOverrides = new HashMap<String, Object>() {{
//       put("hibernate.hbm2ddl.auto", "create");
//    }};


    private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu"); //configOverrides en parametre

    public EntityManagerFactory getEntityManagerFactory() {
        return emf;
    }

    public abstract int insert(T obj);

    public abstract void update(T obj);

    public abstract void delete(T obj);

    public abstract T find(int id);

    public abstract List<T> findAll();
}
