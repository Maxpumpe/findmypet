package com.maxpumpe.findmypet.configuration.security;

@Deprecated
public enum ApplicationUserPermission {
    API_READ("api:read"),
    API_WRITE("api:write"),
    ENTITY_READ("entity:read"),
    ENTITY_WRITE("entity:write");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
