using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using DG.Tweening;
using UnityEngine.UI;


public class PlayerController : MonoBehaviour, IDragHandler, IPointerDownHandler, IPointerUpHandler
{
    [SerializeField] Image scopeOverlay;

    // Start is called before the first frame update
    private bool m_ispointDown;
    Vector3 lastMousePosition;
    [SerializeField] Vector3 gunMovingPos;
    [SerializeField] float _FOVscoped;
    [SerializeField] float leftCamBound;
    [SerializeField] float upCamBound;

    [SerializeField] float rightCamBound;
    [SerializeField] float downCamBound;
    [SerializeField] float _FOVcache;

    private bool m_isClickPoint;
    public bool IsInteractive;
    public BaseGun SniperGun;
    public bool CanShoot;
    public Camera m_camera;
    public bool IsShooting = false;

    private float velocity = 0.0f;

    public bool IsShowEnemyPopup;
    [SerializeField] float smoothTime;

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

    public void OnDrag(PointerEventData evenData)
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
            m_isClickPoint = false;
            SniperGun.gameObject.transform.DOKill();
            OnUnscoped();
        }
    }

    private void OnScoped()
    {
        m_isClickPoint = true;
        CanShoot = true;
        SniperGun.gameObject.transform.DOLocalMove(gunMovingPos, 0.2f).SetEase(Ease.OutQuart).OnComplete(() =>
         {
             SniperGun.gameObject.SetActive(false);
             m_camera.DOFieldOfView(_FOVscoped, 0.1f);
             scopeOverlay.gameObject.SetActive(true);
             SniperGun.transform.DOKill();
         });
    }
    private void OnUnscoped()
    {
        m_camera.DOFieldOfView(_FOVcache, 0.1f);
        SniperGun.gameObject.transform.DOLocalMove(new Vector3(1f, -2.5f, 1.4f), 0f);
        SniperGun.gameObject.SetActive(true);
        scopeOverlay.gameObject.SetActive(false);

        if (CanShoot)
        {
            SniperGun.gameObject.GetComponent<BaseGun>().ExploreFx();
            IsInteractive = false;
            CanShoot = false;
            Shooting();
            SniperGun.gameObject.GetComponent<BaseGun>().Preparing();
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
    
    private void Shooting()
    {
        IsShooting = true;

        SniperGun.Fire();
    }
}
