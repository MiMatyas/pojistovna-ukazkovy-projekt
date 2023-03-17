package cz.matyas.Pojistovna.services.impl;

import cz.matyas.Pojistovna.domain.Insurance;
import cz.matyas.Pojistovna.mapper.InsuranceRowMapper;
import cz.matyas.Pojistovna.services.api.InsuranceService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.security.Key;
import java.sql.*;
import java.time.Instant;
import java.util.List;


/* anotace Service říká javě že tato třída bude komunikovat s databazi*/
@Service
public class InsuranceServiceImpl implements InsuranceService {
    private final JdbcTemplate jdbcTemplate;
    private final InsuranceRowMapper insuranceRowMapper = new InsuranceRowMapper();

    public InsuranceServiceImpl (JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Insurance> getAllInsurencies() {
        final String sql = "select * from insurance";
        return jdbcTemplate.query(sql, insuranceRowMapper);
    }

    @Override
    public Insurance get(Integer id) {
        final String sql = "select * from insurance where insurance.id = "+id;
        try {
            return jdbcTemplate.queryForObject(sql, insuranceRowMapper);
        }catch (EmptyResultDataAccessException ex){
            return null;
        }
    }

    @Override
    public List<Insurance> getInsuranciesByUserId(Integer userId) {
        final String sql = "select * from insurance where insurance.user_id = "+userId;
        try {
            return jdbcTemplate.query(sql, insuranceRowMapper);
        }catch (EmptyResultDataAccessException ex){
            return null;
        }
    }

    @Override
    public Integer add( Insurance insurance) {
        final String sql = "insert into insurance(user_id, type_of_insurance, created_at, insured_item, sum) values (?,?,?,?,?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement preparedStatement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                preparedStatement.setInt(1,insurance.getUserId());
                preparedStatement.setString(2, insurance.getTypeOfInsurance());
                preparedStatement.setTimestamp(3, Timestamp.from(Instant.now()));
                preparedStatement.setString(4, insurance.getInsuredItem());
                preparedStatement.setInt(5, insurance.getSum());
                return preparedStatement;
            }
        }, keyHolder);
        if (keyHolder.getKey() != null){
            return keyHolder.getKey().intValue();
        }else {
            return null;
        }
    }

    @Override
    public void deleteInsurance(Integer id) {
        final String sql = "delete from insurance where id = ?";
        jdbcTemplate.update(sql,id);
    }

    @Override
    public void updateInsurance(Integer id, Insurance insurance) {
        final String sql = "update insurance set type_of_insurance = ?, created_at = ?, insured_item = ?, sum = ? where id = ?";
        jdbcTemplate.update(sql, insurance.getTypeOfInsurance(),insurance.getCreatedAt(),insurance.getInsuredItem(),insurance.getSum(),id);


    }
}
