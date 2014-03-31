package city.dataAccess;

import city.City;
import common.dataAccess.Dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by arnaud on 30/03/2014.
 */
public class DaoCity extends Dao<City> {

    private final static DaoCity instance = new DaoCity();

    private final int LIMIT = 4;

    private DaoCity() {}

    public static DaoCity getInstance() {
        return instance;
    }
    @Override
    public int insert(City obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
            em.flush();
            int id = obj.getId_city();
            t.commit();
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }

    }

    @Override
    public void update(City obj) {

    }

    @Override
    public void delete(City obj) {

    }

    @Override
    public City find(int id) {
        return null;
    }

    @Override
    public List<City> findAll() {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        List<City> listCity;
        try {
            t.begin();
            String sql = "select e from City e";
            TypedQuery<City> query = em.createQuery(sql, City.class);
            t.commit();
            listCity = query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            listCity = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }

        return listCity;
    }

    public List<City> loadCities(String searchParam) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        List<City> listCity;
        try {
            t.begin();
            String sql = "select e from City e where e.name_city like :searchParam";
            TypedQuery<City> query = em.createQuery(sql, City.class);
            query.setParameter("searchParam", "%" + searchParam + "%");
            query.setMaxResults(LIMIT);
            t.commit();
            listCity = query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            listCity = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }

        return listCity;
    }
}
