from flask import Blueprint, request, jsonify
from api.models import db, User, People, Planet, Favorite
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)
bcrypt = Bcrypt()

# -------- SIGNUP --------
@api.route("/signup", methods=["POST"])
def signup():
    body = request.json

    if not body or not body.get("email") or not body.get("password") or not body.get("first_name") or not body.get("last_name"):
        return jsonify({"msg": "missing fields"}), 400

    existing_user = User.query.filter_by(email=body["email"]).first()
    if existing_user:
        return jsonify({"msg": "user already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(body["password"]).decode("utf-8")

    new_user = User(
        email=body["email"],
        password=hashed_password,
        first_name=body["first_name"],
        last_name=body["last_name"],
        is_active=True
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "user created"}), 201

# -------- LOGIN --------
@api.route("/login", methods=["POST"])
def login():
    body = request.json

    if not body or not body.get("email") or not body.get("password"):
        return jsonify({"msg": "missing email or password"}), 400

    user = User.query.filter_by(email=body["email"]).first()
    if not user:
        return jsonify({"msg": "user not found"}), 404

    is_valid = bcrypt.check_password_hash(user.password, body["password"])
    if not is_valid:
        return jsonify({"msg": "invalid password"}), 401

    return jsonify({"msg": "login successful"}), 200

# -------- PEOPLE --------
@api.route("/people", methods=["GET"])
def get_all_people():
    people = People.query.all()
    return jsonify([p.serialize() for p in people]), 200

@api.route("/people/<int:people_id>", methods=["GET"])
def get_one_person(people_id):
    person = People.query.get(people_id)
    if not person:
        return jsonify({"msg": "person not found"}), 404
    return jsonify(person.serialize()), 200

# -------- PLANETS --------
@api.route("/planets", methods=["GET"])
def get_all_planets():
    planets = Planet.query.all()
    return jsonify([p.serialize() for p in planets]), 200

@api.route("/planet/<int:planet_id>", methods=["GET"])
def get_one_planet(planet_id):
    planet = Planet.query.get(planet_id)
    if not planet:
        return jsonify({"msg": "planet not found"}), 404
    return jsonify(planet.serialize()), 200

# -------- USERS --------
@api.route("/users", methods=["GET"])
def get_all_users():
    users = User.query.all()
    return jsonify([u.serialize() for u in users]), 200

# -------- USER FAVORITES --------
@api.route("/users/favorites", methods=["GET"])
def get_user_favorites():
    favorites = Favorite.query.filter_by(user_id=1).all()
    return jsonify([f.serialize() for f in favorites]), 200

# -------- ADD FAVORITES --------
@api.route("/favorite/planet/<int:planet_id>", methods=["POST"])
def add_favorite_planet(planet_id):
    if not planet_id or not isinstance(planet_id, int):
        return jsonify({"msg": "invalid or missing planet_id"}), 400

    new_favorite = Favorite(user_id=1, planet_id=planet_id)
    db.session.add(new_favorite)
    db.session.commit()
    return jsonify({"msg": "planet favorite added"}), 201

@api.route("/favorite/people/<int:people_id>", methods=["POST"])
def add_favorite_person(people_id):
    if not people_id or not isinstance(people_id, int):
        return jsonify({"msg": "invalid or missing people_id"}), 400

    new_favorite = Favorite(user_id=1, people_id=people_id)
    db.session.add(new_favorite)
    db.session.commit()
    return jsonify({"msg": "people favorite added"}), 201

# -------- DELETE FAVORITES --------
@api.route("/favorite/planet/<int:planet_id>", methods=["DELETE"])
def delete_favorite_planet(planet_id):
    favorite = Favorite.query.filter_by(user_id=1, planet_id=planet_id).first()
    if not favorite:
        return jsonify({"msg": "planet favorite not found"}), 404

    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"msg": "planet favorite deleted"}), 200

@api.route("/favorite/people/<int:people_id>", methods=["DELETE"])
def delete_favorite_person(people_id):
    favorite = Favorite.query.filter_by(user_id=1, people_id=people_id).first()
    if not favorite:
        return jsonify({"msg": "people favorite not found"}), 404

    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"msg": "people favorite deleted"}), 200
