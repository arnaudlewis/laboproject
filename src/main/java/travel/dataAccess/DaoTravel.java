package travel.dataAccess;

import city.City;
import common.dataAccess.Dao;
import travel.Travel;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import java.util.Date;
import java.util.List;

/**
 * Created by eric on 26/02/14.
 */
public class DaoTravel extends Dao<Travel> {

    private static final DaoTravel instance = new DaoTravel();

    public static DaoTravel getInstance() {
        return instance;
    }

    private DaoTravel() {
    }

    @Override
    public int insert(Travel obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
            int id = obj.getId_travel();
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
    public void update(Travel obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.merge(obj);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }

    }

    @Override
    public void delete(Travel obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public Travel find(int id) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        Travel findedTravel;

        try {
            t.begin();
            findedTravel = em.find(Travel.class, id);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
            findedTravel = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }

        return findedTravel;
    }

    @Override
    public List<Travel> findAll() {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Travel> resultList;
        try {
            t.begin();
            String sql = "SELECT e FROM Travel e";
            TypedQuery<Travel> requete = em.createQuery(sql, Travel.class);
            resultList = requete.getResultList();
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
            resultList = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return resultList;
    }

    public List<Travel> searchByCriteria(City departure, City arrival, Date travelDate) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Travel> resultList;
        try {
            t.begin();
            String sql = "SELECT e FROM Travel e WHERE e.departure.id_city = :id_departure AND e.arrival.id_city= :id_arrival  AND e.travelDate = :travelDate";
            TypedQuery<Travel> requete = em.createQuery(sql, Travel.class);
            requete.setParameter("id_departure", departure.getId_city());
            requete.setParameter("id_arrival", arrival.getId_city());
            requete.setParameter("travelDate", travelDate);
            resultList = requete.getResultList();
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
            resultList = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return resultList;
    }
}
