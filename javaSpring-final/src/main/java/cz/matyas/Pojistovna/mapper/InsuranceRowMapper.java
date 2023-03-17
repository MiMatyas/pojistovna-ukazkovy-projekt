package cz.matyas.Pojistovna.mapper;


import cz.matyas.Pojistovna.domain.Insurance;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

// RowMapper se musí implementovat z "org.springframework.jdbc.core.RowMapper"
public class InsuranceRowMapper implements RowMapper<Insurance> {

    @Override
    public Insurance mapRow(ResultSet rs, int rowNum) throws SQLException {
        Insurance insurance = new Insurance();
        insurance.setId(rs.getInt("id"));
        insurance.setUserId(rs.getInt("user_id"));
        insurance.setTypeOfInsurance(rs.getString("type_of_insurance"));
        insurance.setCreatedAt(rs.getTimestamp("created_at"));
        insurance.setInsuredItem(rs.getString("insured_item"));
        insurance.setSum(rs.getInt("sum"));
        return insurance;
    }
}
