"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Badge,
} from "react-bootstrap";


const ServiceFilter = ({
  search,
  setSearch,
  minRating,
  setMinRating,
  category,
  setCategory,
}) => {
  return (
    <>
      <Container className="my-5">
        <Row className="mb-4 text-white hover">
          <Col md={4}>
            <Form.Control
              style={{
                backgroundColor: "#1e2939",
                color: "#fff",
              }}
              className="place"
              type="text"
              placeholder="Search by Name or type of Service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Select
              style={{
                backgroundColor: "#1e2939",
                color: "#fff",
              }}
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            >
              <option value={0}>All Rates</option>
              <option value={4}>Star +4</option>
              <option value={4.5}>Star +4.5</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select
              style={{
                backgroundColor: "#1e2939",
                color: "#fff",
              }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="web">Web Development</option>
              <option value="design">UI/UX Design</option>
              <option value="mobile">Mobile Development</option>
              <option value="tech">Tech Solutions</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceFilter;
