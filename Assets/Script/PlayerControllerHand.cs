using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using DG.Tweening;
using UnityEngine.UI;

public class PlayerControllerHand : MonoBehaviour, IDragHandler, IPointerDownHandler, IPointerUpHandler
{
    [SerializeField] float leftCamBound;
    [SerializeField] float upCamBound;
    [SerializeField] float rightCamBound;
    [SerializeField] float downCamBound;
    [SerializeField] float smoothTime;
    private Vector3 lastMousePosition;

    public bool IsInteractive;
    public MagicHand magichand;
    public bool CanShoot;
    public bool IsShooting;

    private float velocity = 0.0f;
    [SerializeField]
    private Camera m_camera;

    private bool m_ispointDown;
    private bool m_ispointUp;
    public bool IsShowEnemyPopup;

    private void Update()
    {
        if (m_ispointUp)
        {
            if (CanShoot)
            {
                magichand.Shoot();
            }
            CanShoot = false;
            m_ispointUp = false;
            m_ispointDown = false;
            return;
        }

        if (m_ispointDown && IsInteractive)
        {
            magichand.OnScoped();
            m_ispointDown = false;
            m_ispointUp = false;
        }
    }
   
    void OnScoped()
    {
        CanShoot = true;
        magichand.OnScoped();
    }
    public void OnDrag(PointerEventData eventData)
    {
        if (!IsInteractive)
        {
            return;
        }
        if (m_ispointDown && IsInteractive && IsShowEnemyPopup == false)
        {
            OnScoped();
        }

        var delta = Input.mousePosition - lastMousePosition;
        delta = delta / Time.deltaTime * Mathf.SmoothDamp(0, 0.007f, ref velocity, smoothTime);

        lastMousePosition = Input.mousePosition;

        Vector3 relativePos = new Vector3(-delta.y, delta.x);
        Vector3 startRotation = m_camera.transform.eulerAngles;
        Vector3 targetRotation = startRotation + relativePos; //xoay theo delta

        targetRotation.x = ClampAngle(targetRotation.x, upCamBound, downCamBound);
        targetRotation.y = ClampAngle(targetRotation.y, leftCamBound, rightCamBound);

        m_camera.transform.rotation = Quaternion.Euler(targetRotation);
    }
    public void OnPointerUp(PointerEventData eventData)
    {
        if (IsInteractive)
        {
            magichand.transform.DOKill();
            if (CanShoot)
            {
                CanShoot = false;
                magichand.Shoot();
            }
        }
    }
    public static float ClampAngle(float angle, float min, float max)
    {
        float start = (min + max) * 0.5f - 180;
        float floor = Mathf.FloorToInt((angle - start) / 360) * 360;
        min += floor;
        max += floor;
        return Mathf.Clamp(angle, min, max);
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        if (!IsInteractive)
        {
            return;
        }
        m_ispointDown = true;
        lastMousePosition = Input.mousePosition;
        m_ispointDown = false;
        OnScoped();
    }
}
